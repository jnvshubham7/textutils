{props.alert && (
        <div className={`position-fixed end-0 p-3 alert alert-${props.alert.type} fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}