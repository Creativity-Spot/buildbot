/*
  This file is part of Buildbot.  Buildbot is free software: you can
  redistribute it and/or modify it under the terms of the GNU General Public
  License as published by the Free Software Foundation, version 2.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
  details.

  You should have received a copy of the GNU General Public License along with
  this program; if not, write to the Free Software Foundation, Inc., 51
  Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

  Copyright Buildbot Team Members
*/

import {ForceSchedulerFieldInt} from "buildbot-data-js";
import {ForceBuildModalFieldsState} from "../ForceBuildModalFieldsState";
import {observer} from "mobx-react";
import {FieldBase} from "./FieldBase";

type FieldIntProps = {
  field: ForceSchedulerFieldInt;
  fieldsState: ForceBuildModalFieldsState;
}

export const FieldInt = observer(({field, fieldsState}: FieldIntProps) => {
  const state = fieldsState.fields.get(field.name)!;

  return (
    <FieldBase field={field} fieldsState={fieldsState}>
      <label htmlFor={field.name} className="control-label col-sm-10">{field.label}</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" value={state.value}
               onChange={event => fieldsState.setValue(field.name, event.target.value)}/>
      </div>
    </FieldBase>
  );
});
